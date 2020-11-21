!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{tmrb:function(t,i,o){"use strict";o.r(i),o.d(i,"Tab1PageModule",function(){return K});var r,a,c=o("TEn/"),s=o("ofXK"),u=o("3Pt+"),l=o("qtYk"),b=o("tyNb"),m=o("mrSG"),f=o("fXoL"),d=((a=function(){function t(){e(this,t),this.items=[]}return n(t,[{key:"getItems",value:function(){return this.items}},{key:"removeItem",value:function(e){this.items.splice(e,1)}},{key:"editItem",value:function(e,t){this.items[t].name=e.name,this.items[t].quantity=e.quantity}},{key:"addItem",value:function(e){this.items.push(e)}}]),t}()).\u0275fac=function(e){return new(e||a)},a.\u0275prov=f.Eb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),h=((r=function(){function t(n,i){e(this,t),this.alertController=n,this.dataService=i}return n(t,[{key:"showPrompt",value:function(e,t,n){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark(function i(){var o,r=this;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.alertController.create({cssClass:"my-custom-class",header:e?"Edit Item":"Add Item",inputs:[{name:"name",placeholder:"Name",value:e?e.name:null},{name:"quantity",placeholder:"Quantity",value:e?e.quantity:null}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(){console.log("Confirm Cancel")}},{text:"Save",handler:function(e){console.log("Confirm Save",e),void 0!==t?(r.dataService.editItem(e,t),n.close()):r.dataService.addItem(e)}}]});case 2:return o=i.sent,i.next=5,o.present();case 5:case"end":return i.stop()}},i,this)}))}}]),t}()).\u0275fac=function(e){return new(e||r)(f.Pb(c.a),f.Pb(d))},r.\u0275prov=f.Eb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),p=o("/XPu");function v(e,t){1&e&&(f.Lb(0,"ion-item",9),f.Lb(1,"ion-label"),f.fc(2,"List is empty."),f.Kb(),f.Kb())}function g(e,t){if(1&e){var n=f.Mb();f.Lb(0,"ion-item-sliding",null,10),f.Lb(2,"ion-item"),f.Lb(3,"ion-label"),f.fc(4),f.Kb(),f.Lb(5,"p"),f.fc(6),f.Kb(),f.Kb(),f.Lb(7,"ion-item-options"),f.Lb(8,"ion-button",11),f.Tb("click",function(){f.bc(n);var e=t.$implicit,i=t.index,o=f.ac(1);return f.Vb().editItem(e,i,o)}),f.Jb(9,"ion-icon",12),f.Kb(),f.Lb(10,"ion-button",13),f.Tb("click",function(){f.bc(n);var e=t.$implicit,i=t.index,o=f.ac(1);return f.Vb().shareItem(e,i,o)}),f.Jb(11,"ion-icon",14),f.Kb(),f.Lb(12,"ion-button",15),f.Tb("click",function(){f.bc(n);var e=t.$implicit,i=t.index;return f.Vb().removeItem(e,i)}),f.Jb(13,"ion-icon",16),f.Kb(),f.fc(14," > "),f.Kb(),f.Kb()}if(2&e){var i=t.$implicit;f.yb(4),f.gc(i.name),f.yb(2),f.gc(i.quantity)}}var y,I,k,w=[{path:"",component:(y=function(){function t(n,i,o,r,a){e(this,t),this.toastController=n,this.alertController=i,this.dataService=o,this.inputDialogService=r,this.socialSharing=a,this.title="Grocery App"}return n(t,[{key:"loadItems",value:function(){return this.dataService.getItems()}},{key:"removeItem",value:function(e,t){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("Removing Item = ",e,t),n.next=3,this.toastController.create({message:"Removing "+e.name+"...",duration:2e3});case 3:n.sent.present(),this.dataService.removeItem(t);case 5:case"end":return n.stop()}},n,this)}))}},{key:"shareItem",value:function(e,t,n){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark(function i(){return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return console.log("Sharing Item = ",e,t),i.next=3,this.toastController.create({message:"Sharing "+e.name+"...",duration:2e3});case 3:i.sent.present(),n.close(),this.socialSharing.share("Name: "+e.name+"  Quantity: "+e.quantity,"Shared vis Groceriers App").then(function(){console.log("shared successfully!")}).catch(function(e){console.error("Error while sharing ",e)});case 6:case"end":return i.stop()}},i,this)}))}},{key:"editItem",value:function(e,t,n){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark(function i(){return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return console.log("Edit Item = ",e,t),i.next=3,this.toastController.create({message:"Editing "+e.name+"...",duration:2e3});case 3:i.sent.present(),console.log("Editing Item"),this.inputDialogService.showPrompt(e,t,n);case 6:case"end":return i.stop()}},i,this)}))}},{key:"addItem",value:function(){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Adding Item"),this.inputDialogService.showPrompt();case 1:case"end":return e.stop()}},e,this)}))}}]),t}(),y.\u0275fac=function(e){return new(e||y)(f.Ib(c.w),f.Ib(c.a),f.Ib(d),f.Ib(h),f.Ib(p.a))},y.\u0275cmp=f.Cb({type:y,selectors:[["app-tab1"]],decls:15,vars:6,consts:[[3,"translucent"],["padding","",3,"fullscreen"],["collapse","condense"],["size","large"],["class","ion-text-center",4,"ngIf"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],[3,"click"],["name","add"],[1,"ion-text-center"],["slidingItem",""],["ion-button","","color","primary","icon-start","",3,"click"],["name","create"],["ion-button","","color","secondary","icon-start","",3,"click"],["name","share"],["ion-button","","color","danger","icon-start","",3,"click"],["name","trash"]],template:function(e,t){1&e&&(f.Lb(0,"ion-header",0),f.Lb(1,"ion-toolbar"),f.Lb(2,"ion-title"),f.fc(3),f.Kb(),f.Kb(),f.Kb(),f.Lb(4,"ion-content",1),f.Lb(5,"ion-header",2),f.Lb(6,"ion-toolbar"),f.Lb(7,"ion-title",3),f.fc(8),f.Kb(),f.Kb(),f.Kb(),f.ec(9,v,3,0,"ion-item",4),f.Lb(10,"ion-list"),f.ec(11,g,15,2,"ion-item-sliding",5),f.Kb(),f.Lb(12,"ion-fab",6),f.Lb(13,"ion-fab-button",7),f.Tb("click",function(){return t.addItem()}),f.Jb(14,"ion-icon",8),f.Kb(),f.Kb(),f.Kb()),2&e&&(f.Yb("translucent",!0),f.yb(3),f.hc(" ",t.title," "),f.yb(1),f.Yb("fullscreen",!0),f.yb(4),f.gc(t.title),f.yb(1),f.Yb("ngIf",0==t.loadItems().length),f.yb(2),f.Yb("ngForOf",t.loadItems()))},directives:[c.g,c.s,c.r,c.d,s.i,c.m,s.h,c.e,c.f,c.h,c.i,c.l,c.k,c.j,c.c],styles:[""]}),y)}],L=((k=function t(){e(this,t)}).\u0275mod=f.Gb({type:k}),k.\u0275inj=f.Fb({factory:function(e){return new(e||k)},imports:[[b.i.forChild(w)],b.i]}),k),K=((I=function t(){e(this,t)}).\u0275mod=f.Gb({type:I}),I.\u0275inj=f.Fb({factory:function(e){return new(e||I)},imports:[[c.t,s.b,u.a,l.a,L]]}),I)}}])}();