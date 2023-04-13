import { HttpClient } from '@angular/common/http';
import { CachingService } from './caching.service';
import { map } from 'rxjs';

export abstract class CrudService<T> extends CachingService {
  constructor(private http: HttpClient, private baseUrl: string) {
    super();
  }

  readById(id: string) {
    return this.http
      .get<{ rs: T }>(this.baseUrl + `/${id}`)
      .pipe(map((res) => res.rs));
  }

  readAll() {
    return this.http.get<{ rs: T[] }>(this.baseUrl).pipe(map((res) => res.rs));
  }

  create(data: Partial<T>) {
    return this.http.post<T>(
      this.baseUrl + `/admin/full`,
      JSON.stringify(data)
    );
  }

  update(data: Partial<T>) {
    return this.http.put<T>(this.baseUrl + `/admin/full`, JSON.stringify(data));
  }

  delete(id: string) {
    return this.http.delete(this.baseUrl + `/admin/${id}`);
  }
}
