// Utilitaires de sécurité pour l'application
import crypto from 'crypto'

// Protection contre les injections SQL (pour les futures intégrations DB)
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return ''
  
  return input
    .replace(/[<>]/g, '') // Suppression des balises HTML
    .replace(/['"]/g, '') // Suppression des guillemets
    .replace(/[;]/g, '') // Suppression des points-virgules
    .replace(/[\x00-\x1f\x7f-\x9f]/g, '') // Suppression des caractères de contrôle
    .trim()
    .substring(0, 1000) // Limitation de longueur
}

// Validation d'email sécurisée
export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email) && email.length <= 254
}

// Génération de nonce pour CSP
export function generateNonce(): string {
  return crypto.randomBytes(16).toString('base64')
}

// Validation des données de formulaire
export function validateContactForm(data: {
  name: string
  email: string
  subject: string
  message: string
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  // Validation du nom
  if (!data.name || data.name.length < 2 || data.name.length > 100) {
    errors.push('Le nom doit contenir entre 2 et 100 caractères')
  }

  // Validation de l'email
  if (!validateEmail(data.email)) {
    errors.push('Adresse email invalide')
  }

  // Validation du sujet
  if (!data.subject || data.subject.length < 5 || data.subject.length > 200) {
    errors.push('Le sujet doit contenir entre 5 et 200 caractères')
  }

  // Validation du message
  if (!data.message || data.message.length < 10 || data.message.length > 2000) {
    errors.push('Le message doit contenir entre 10 et 2000 caractères')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// Protection contre les attaques par déni de service
const requestCounts = new Map<string, { count: number; resetTime: number }>()

export function rateLimitCheck(
  identifier: string, 
  maxRequests: number = 10, 
  windowMs: number = 60000
): boolean {
  const now = Date.now()
  const record = requestCounts.get(identifier)

  if (!record || now > record.resetTime) {
    requestCounts.set(identifier, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}

// Nettoyage périodique des compteurs de rate limiting
setInterval(() => {
  const now = Date.now()
  for (const [key, record] of requestCounts.entries()) {
    if (now > record.resetTime) {
      requestCounts.delete(key)
    }
  }
}, 60000) // Nettoyage toutes les minutes

// Logging sécurisé des événements
export function logSecurityEvent(
  type: 'contact_form' | 'rate_limit' | 'validation_error' | 'suspicious_activity',
  details: string,
  ipAddress?: string
) {
  const timestamp = new Date().toISOString()
  const logEntry = {
    timestamp,
    type,
    details,
    ipAddress: ipAddress || 'unknown'
  }

  // En production, ceci devrait être envoyé vers un service de logging sécurisé
  console.log(`[SECURITY] ${JSON.stringify(logEntry)}`)
}