import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@app/shared/interfaces/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent {
character$: Observable<Character>;

constructor(private route:ActivatedRoute, private characterSvc: CharacterService, private location:Location){}

ngOnInit(): void{
    this.route.params.pipe(take(1)).subscribe((params) =>{
      const id = params['id'];
      this.character$ = this.characterSvc.getDetails(id);
    });
}

onGoBack():void{
  this.location.back();
}

}
