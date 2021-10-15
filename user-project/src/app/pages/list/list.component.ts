import { UserModel } from './user.model';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/beans/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public url = 'http://localhost:3000/posts';
  public users = [];
  private api = ApiService;

  constructor(private httpClient: HttpClient, private apiService: ApiService) {}

  ngOnInit(): void {}

  getAll() {}

  getUserById(id: number) {}
}
