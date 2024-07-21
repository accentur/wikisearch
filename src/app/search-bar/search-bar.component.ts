import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Output() submitted = new EventEmitter<string>();


  onFormSubmit(event: any) {

    event.preventDefault();
    this.submitted.emit(this.term);


}
    term='';

  onInput(value: Event) {
  
    const target = value.target as HTMLInputElement;
    this.term = target.value;

}

  

}
