import { initializeAdmin } from '../lib/admin-storage.js'

async function runInitialization() {
  console.log('🚀 Initialisation du panneau d\'administration...\n')
  
  try {
    const password = await initializeAdmin()
    
    if (password) {
      console.log('✅ Initialisation terminée avec succès!')
      console.log('\n📋 Informations de connexion:')
      console.log('URL: http://localhost:3000/admin/login')
      console.log('Utilisateur: admin')
      console.log(`Mot de passe: ${password}`)
      console.log('\n⚠️  IMPORTANT: Changez ce mot de passe après la première connexion!')
      console.log('⚠️  Vous pouvez le modifier dans les paramètres admin.')
    } else {
      console.log('ℹ️  Le panneau admin est déjà initialisé.')
    }
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation:', error)
  }
}

runInitialization()