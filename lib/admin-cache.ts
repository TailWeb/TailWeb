// Cache en mémoire pour les données admin
interface CacheEntry<T> {
  data: T
  timestamp: number
  ttl: number
}

class AdminCache {
  private cache = new Map<string, CacheEntry<any>>()
  private readonly DEFAULT_TTL = 5 * 60 * 1000 // 5 minutes

  set<T>(key: string, data: T, ttl: number = this.DEFAULT_TTL): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    })
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key)
    
    if (!entry) return null
    
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key)
      return null
    }
    
    return entry.data
  }

  invalidate(key: string): void {
    this.cache.delete(key)
  }

  clear(): void {
    this.cache.clear()
  }
}

export const adminCache = new AdminCache()

// Hook pour les données admin avec cache
export function useAdminData() {
  const CACHE_KEY = 'admin-stats'
  
  // Essayer le cache d'abord
  const cachedData = adminCache.get(CACHE_KEY)
  if (cachedData) {
    return { data: cachedData, loading: false, error: null }
  }

  // Sinon, charger et mettre en cache
  const loadData = async () => {
    try {
      const response = await fetch('/api/admin/stats', {
        credentials: 'include'
      })
      
      if (response.ok) {
        const data = await response.json()
        adminCache.set(CACHE_KEY, data, 2 * 60 * 1000) // Cache 2 minutes
        return data
      }
    } catch (error) {
      console.error('Erreur chargement données admin:', error)
    }
    
    return null
  }

  return { loadData, loading: true, error: null }
}