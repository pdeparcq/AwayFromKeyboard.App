import { Injectable, Inject } from '@angular/core';

import 'prismjs';
import 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-csharp';

declare var Prism: any;

@Injectable()
export class HighlightService {

  constructor() { }

  highlight(code: string) : string{
    return Prism.highlight(code, Prism.languages.csharp, "csharp");
  }
}