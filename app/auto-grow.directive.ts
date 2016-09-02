import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)':'onFocus()',
        '(blur)': 'onBlur()'
    }
})

export class AutoGrowDirective {
    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    }

    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
    }

    constructor(private el:ElementRef, private renderer:Renderer){
    }

}