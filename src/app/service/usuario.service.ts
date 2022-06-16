import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Curso } from '../model/Curso';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  token = {headers: new HttpHeaders().set('Authorization', environment.token)}

  getById(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/${id}`, this.token)
  }

  getByEmail(email: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/email/${email}`, this.token)
  }

  getByNome(nome: number): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`http://localhost:8080/usuarios/nome/${nome}`, this.token)
  }

  getByCurso(email: number): Observable<Curso[]>{
    return this.http.get<Curso[]>(`http://localhost:8080/usuarios/cursos/${email}`, this.token)
  }

  getAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`http://localhost:8080/usuarios/all`, this.token)
  }

  postLogar(usuarioLogin:UsuarioLogin):Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('http://localhost:8080/usuarios/logar',usuarioLogin)
  }

  postCadastrar(user:Usuario):Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar',user)
  }

  putAtualizar(user: Usuario):Observable<Usuario>{
    return this.http.put<Usuario>('http://localhost:8080/usuarios/atualizar', user, this.token)
  }

  logado(){
    let ok: boolean=false
    if(environment.token != ''){
      ok=true
    }
    console.log(environment.token)
    return ok
  }
}
