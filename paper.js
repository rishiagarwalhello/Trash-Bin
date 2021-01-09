class paper_class
{
    constructor(x, y, r)
    {
        var paper_properties=
        {
            'restitution':1,
            'friction':0,
            'density':1.2
        }
        this.body=Bodies.circle(x, y, r, paper_properties);
        this.x=175;
        this.y=35;
        this.r=20;
        World.add(world, this.body);
    }
    display()
    {
        push();
        ellipseMode(CENTER);
        fill("lightgrey");
        ellipse(this.body.position.x, this.body.position.y, this.r);
        pop();
    }
}