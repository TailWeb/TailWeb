import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'

const ADMIN_USERNAME = 'admin'
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key'

// Génération d'un mot de passe aléatoirement sécurisé
export function generateSecurePassword(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
  let password = ''
  for (let i = 0; i < 16; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

// Hash du mot de passe
export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 12)
}

// Vérification du mot de passe
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword)
}

// Génération du token JWT
export function generateToken(username: string): string {
  return jwt.sign(
    { username, isAdmin: true },
    JWT_SECRET,
    { expiresIn: '24h' }
  )
}

// Vérification du token JWT
export function verifyToken(token: string): { username: string; isAdmin: boolean } | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any
    return decoded
  } catch (error) {
    return null
  }
}

// Middleware de vérification d'authentification
export function isAuthenticated(request: NextRequest): boolean {
  const token = request.cookies.get('admin-token')?.value
  if (!token) return false
  
  const decoded = verifyToken(token)
  return decoded?.isAdmin === true
}

// Configuration admin par défaut
export const ADMIN_CONFIG = {
  username: ADMIN_USERNAME,
  maxLoginAttempts: 5,
  lockoutDuration: 15 * 60 * 1000, // 15 minutes
}