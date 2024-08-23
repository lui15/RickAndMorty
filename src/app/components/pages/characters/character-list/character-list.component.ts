import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Character } from '@app/shared/interfaces/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { take } from 'rxjs';
type RequestInfo = {
  next: string;
}

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
characters:Character[] =[];
info:RequestInfo = {
  next: "",
};
private pageNum = 1;
private query = "";
private hideScrollHeight = 200;
private showScrollHeight = 500;

constructor(private characterSvc: CharacterService){}

ngOnInit():void{
  this.getDataFromService();
}

private getDataFromService():void{
  this.characterSvc
  .searchCharacter(this.query, this.pageNum)
  .pipe(take(1))
  .subscribe((res:any) => {
    const {info, results} = res;
    this.characters = [...this.characters, ...results];
    this.info = info;
  })
}
}
