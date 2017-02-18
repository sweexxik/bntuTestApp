import { DOCUMENT } from "@angular/platform-browser";
import { Inject } from "@angular/core";
import { Injectable } from "@angular/core";

@Injectable()
export class AppReadyEvent {
    private doc: Document;
    private isAppReady: boolean;
    constructor( @Inject( DOCUMENT ) doc: any ) {
        this.doc = doc;
        this.isAppReady = false;
    }


    public trigger() : void {
        if ( this.isAppReady ) {
            return;
        }
        let bubbles = true;
        let cancelable = false;
        this.doc.dispatchEvent( this.createEvent( "appready", bubbles, cancelable ) );
        this.isAppReady = true;
    }

    private createEvent(eventType: string, bubbles: boolean, cancelable: boolean) : Event {
        try {
            var customEvent: any = new CustomEvent(eventType,
                {
                    bubbles: bubbles,
                    cancelable: cancelable
                });
        } catch ( error ) {

            var customEvent: any = this.doc.createEvent( "CustomEvent" );
            customEvent.initCustomEvent( eventType, bubbles, cancelable );
        }
        return( customEvent );

    }

}