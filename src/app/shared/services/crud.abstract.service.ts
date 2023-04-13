import { HttpClient } from '@angular/common/http';
import { CachingService } from './caching.service';
import { map } from 'rxjs';

type responseType<T> = { rs: T[] };
export abstract class CrudService<T> extends CachingService {
  constructor(private http: HttpClient, private baseUrl: string) {
    super();
  }

  readById(id: string) {
    return this.http
      .get<responseType<T>>(this.baseUrl + `/${id}`)
      .pipe(map((res) => res.rs));
  }

  readAll() {
    return this.http
      .get<responseType<T>>(this.baseUrl)
      .pipe(map((res) => res.rs));
  }

  create(data: Partial<T>) {
    return this.http
      .post<responseType<T>>(this.baseUrl + `/admin/full`, JSON.stringify(data))
      .pipe(map((res) => res.rs));
  }

  update(data: Partial<T>) {
    return this.http
      .put<responseType<T>>(this.baseUrl + `/admin/full`, JSON.stringify(data))
      .pipe(map((res) => res.rs));
  }

  delete(id: string) {
    return this.http.delete(this.baseUrl + `/admin/${id}`);
  }
}
