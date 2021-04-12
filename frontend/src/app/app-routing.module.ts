import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AuthGuard } from './auth.guard';
import { AuthorUpdateComponent } from './author-update/author-update.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:HeaderComponent},
  {path:'books',component:BooksComponent},
  {path:'authors',component:AuthorsComponent},
  {path:'addbook' ,component:AddBookComponent},
  {path:'addauthor', canActivate:[AuthGuard] ,component:AddAuthorComponent},
  {path:'book/:id',component:BookComponent},
  {path:'bookupdate/:id',component:BookUpdateComponent},
  {path:'author/:id',component:AuthorComponent},
  {path:'authorupdate/:id',component:AuthorUpdateComponent},
  {path:'user',component:UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
