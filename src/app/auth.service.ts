import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

interface User {
  username: string;
  email: string;
  password: string;
  role: string; // 'admin' or 'customer'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private admin = { username: 'admin', email: 'admin@example.com', password: 'admin123', role: 'admin' };
  private apiUrl = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<{ success: boolean, role?: string }> {
    if (username === this.admin.username && password === this.admin.password) {
      return of({ success: true, role: this.admin.role });
    }

    return this.http.get<User[]>(`${this.apiUrl}?username=${username}`).pipe(
      map(users => {
        const user = users.find(u => u.password === password);
        return user ? { success: true, role: user.role } : { success: false };
      })
    );
  }

  register(username: string, email: string, password: string): Observable<boolean> {
    return this.http.post<User>(this.apiUrl, { username, email, password, role: 'customer' }).pipe(
      map(() => true)
    );
  }
}
