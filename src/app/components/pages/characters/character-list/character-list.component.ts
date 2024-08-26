import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router, RouterModule } from '@angular/router';
import { Character } from '@app/shared/interfaces/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { filter, take } from 'rxjs';
type RequestInfo = {
  next: string;
}

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
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

constructor(
  private characterSvc: CharacterService,
  private route: ActivatedRoute,
  private router:Router
){
  this.onUrlChanged();
}

ngOnInit():void{
  this.getCharacterByQuery();
}

private onUrlChanged():void{
   this.router.events
   .pipe(filter((event) => event instanceof NavigationEnd))
   .subscribe(() => {
    this.characters = [];
    this.pageNum = 1;
    this.getCharacterByQuery();
   });
}


private getCharacterByQuery():void{
    this.route.queryParams.pipe(take(1)).subscribe((params) => {
        this.query = params['q'];
        this.getDataFromService();
      });
}

private getDataFromService():void{
  this.characterSvc
  .searchCharacter(this.query, this.pageNum)
  .pipe(take(1))
  .subscribe((res:any) => {

    if (res?.results?.length) {
      const {info, results} = res;
      this.characters = [...this.characters, ...results];
      this.info = info;
    }else{
      this.characters = [];
    }

  })
}
}
