import { Injectable } from '@angular/core';

export abstract class CachingService {
  protected setItem(key: string, data: object | string) {
    if (typeof data === 'string') localStorage.setItem(key, data);
    localStorage.setItem(key, JSON.stringify(data));
  }

  protected getItem<T>(key: string) {
    const data = localStorage.getItem(key);
    if (data !== null) return JSON.parse(data) as T;
    return null;
  }

  protected removeItem(key: string) {
    localStorage.removeItem(key);
  }

  protected clear() {
    localStorage.clear();
  }
}
