class bin_bottom_class
{
    constructor(x, y, width, height)
    {
        this.body=Bodies.rectangle(x, y, width, height, {isStatic:true});
        this.x=0;
        this.y=0;
        this.width=340;
        this.height=10;
        World.add(world, this.body);
    }
    display()
    {
        push();
        rectMode(CENTER);
        fill("lightgreen");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}