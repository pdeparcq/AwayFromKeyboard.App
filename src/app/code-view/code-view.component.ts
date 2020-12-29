import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';

@Component({
  selector: 'app-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.sass']
})
export class CodeViewComponent implements OnInit, AfterContentChecked {

  @Input() code: string = "";
  highlightedCode: string = ""

  constructor(private highlightService: HighlightService) { }

  ngAfterContentChecked(): void {
    this.highlightedCode = this.highlightService.highlight(this.code);
  }


  ngOnInit(): void {  
  }

  ngAfterContentInit(): void {
    
  }
}
