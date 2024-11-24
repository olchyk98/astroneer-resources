export class LocalStore implements LocalStoreTrait {
  get (key: string): string | null {
    return localStorage.getItem(key)
  }
  getJSON<T> (key: string): T | null {
    const value = this.get(key)
    if (value == null) return null
    try {
      return JSON.parse(value)
    } catch {
      return null
    }
  }
  set (key: string, rawValue: unknown) {
    if (rawValue == null) return this.remove(key)
    try {
      const value = typeof rawValue === 'object'
        ? JSON.stringify(rawValue)
        : rawValue.toString()
      localStorage.setItem(key, value)
    } catch (e) {
      console.warn(`Could not save value "${rawValue}" to the localStorage.`)
    }
  }
  remove (key: string) {
    const value = this.get(key)
    localStorage.removeItem(key)
    return value
  }
}

export const localStore = new LocalStore()

export interface LocalStoreTrait {
  get(key: string): string | null
  getJSON<T>(key: string): T | null
  set(key: string, value: string | object | null): void
  remove(key: string): unknown | null
}
