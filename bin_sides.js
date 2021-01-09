class bin_sides_class
{
    constructor(x, y, width, height)
    {
        this.body=Bodies.rectangle(x, y, width, height, {isStatic:true});
        this.x=0;
        this.y=0;
        this.width=10;
        this.height=130;
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