import { Injectable } from '@angular/core';

export type DbCollectionKey = string;

export interface DbRecord {
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class DbServerService {
  private readonly storagePrefix = 'taskflow:';

  constructor(private readonly storage: Storage = window.sessionStorage) {}

  list<T extends Record<string, unknown>>(collection: DbCollectionKey): T[] {
    return this.readCollection<T>(collection);
  }

  get<T extends Record<string, unknown>>(collection: DbCollectionKey, id: string): T | null {
    return this.readCollection<T>(collection).find((item) => String(item['id']) === id) ?? null;
  }

  create<T extends Record<string, unknown>>(collection: DbCollectionKey, item: T): T {
    const items = this.readCollection<T>(collection);
    const nextItem = {
      ...item,
      id: (item as Record<string, unknown>)['id'] ?? this.generateId()
    } as T;

    items.push(nextItem);
    this.writeCollection(collection, items);
    return nextItem;
  }

  update<T extends Record<string, unknown>>(collection: DbCollectionKey, id: string, changes: Partial<T>): T | null {
    const items = this.readCollection<T>(collection);
    const index = items.findIndex((item) => String(item['id']) === id);

    if (index < 0) {
      return null;
    }

    const updatedItem = {
      ...items[index],
      ...changes,
      id: items[index]['id']
    } as T;

    items[index] = updatedItem;
    this.writeCollection(collection, items);
    return updatedItem;
  }

  upsert<T extends Record<string, unknown>>(collection: DbCollectionKey, item: T): T {
    const itemId = String((item as Record<string, unknown>)['id'] ?? '');
    const existing = this.get<T>(collection, itemId);

    if (existing) {
      const updated = this.update<T>(collection, itemId, item as Partial<T>);
      return updated ?? item;
    }

    return this.create(collection, item);
  }

  remove(collection: DbCollectionKey, id: string): boolean {
    const items = this.readCollection<Record<string, unknown>>(collection);
    const nextItems = items.filter((item) => String(item['id']) !== id);

    if (nextItems.length === items.length) {
      return false;
    }

    this.writeCollection(collection, nextItems);
    return true;
  }

  clear(collection: DbCollectionKey): void {
    this.storage.removeItem(this.getStorageKey(collection));
  }

  reset(): void {
    for (let index = 0; index < this.storage.length; index += 1) {
      const key = this.storage.key(index);

      if (key && key.startsWith(this.storagePrefix)) {
        this.storage.removeItem(key);
      }
    }
  }

  private readCollection<T>(collection: DbCollectionKey): T[] {
    const key = this.getStorageKey(collection);
    const rawValue = this.storage.getItem(key);

    if (!rawValue) {
      return [];
    }

    try {
      const parsed = JSON.parse(rawValue) as unknown;
      return Array.isArray(parsed) ? (parsed as T[]) : [];
    } catch {
      this.storage.removeItem(key);
      return [];
    }
  }

  private writeCollection<T>(collection: DbCollectionKey, items: T[]): void {
    const key = this.getStorageKey(collection);
    this.storage.setItem(key, JSON.stringify(items));
  }

  private getStorageKey(collection: DbCollectionKey): string {
    return `${this.storagePrefix}${collection}`;
  }

  private generateId(): string {
    return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}
