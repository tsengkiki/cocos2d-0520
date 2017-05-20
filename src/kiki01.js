 var kiki01Layer = cc.Layer.extend({
     ctor:function(){
       this._super();
       var size =cc.winSize;
       console.log("HI~kiki");

       var colorLayer =new cc.LayerColor(
           cc.color(255,255,0),320,45
       );
         colorLayer.x = size.width /2;
         colorLayer.y = size.height/2;
         colorLayer.ignoreAnchorPointForPosition(false);
         this.addChild(colorLayer);

       var myLabel = new cc.LabelTTF(
           'My Game','Arial','42',cc.size(320,60),cc.TEXT_ALIGNMENT_CENTER,cc.VERTICAL_TEXT_ALIGNMENT_top);
       myLabel.x = size.width /2;
       myLabel.y = size.height/2;
       myLabel.setColor(
           cc.color(0,60,200)
       );
       this.addChild(myLabel);

       return true;
     }
 });

 var kiki01Scene = cc.Scene.extend({
     ctor:function(){
         this._super();
         cc.log("AA");

     },
     onEnter:function () {
         this._super();
        cc.log("BB");
         var layer = new kiki01Layer();
         this.addChild(layer);
     }
 });