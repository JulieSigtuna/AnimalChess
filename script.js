//mcdwptle0 = mouse cat dog wolf panther tiger lion elephant air
var arrList;
arrList="0mcdwptle";
function rule(x,y)
{
    var xid,yid;
    var id;
    for(id=0;id<9;id++)
    {
        if(x==arrList[id])
        {
            xid=id;
            break;
        }
    }
    for(id=0;id<9;id++)
    {
        if(y==arrList[id])
        {
            yid=id;
            break;
        }
    }
    if(xid==yid)return 1;
    if(xid>=2&&yid>=2)
    {
        if(xid>=yid)return 1;
        else return -1;
    }
    else if(xid==1&&yid==8)
    {
        return 1;
    }
    else if(xid==8&&yid==1)
    {
        return -1;
    }
    else if(yid==0)return 1;
    else return -1;
}
function drawLine()
{
    for(var i=0;i<8;i++) 
    {
        context.moveTo(15,15+i*50);
        context.lineTo(465,15+i*50);
        context.stroke();
    }
    for(var i=0;i<10;i++)
    {
        context.moveTo(15+i*50,15);
        context.lineTo(15+i*50,365);
        context.stroke();
    }
}
var chess=document.getElementById("chess") ;
var context=chess.getContext("2d");
drawLine();
var chessboard=[],belongboard=[];
for(var i=0;i<=9;i++)
{
    chessboard[i]=[];
    belongboard[i]=[];
    for(var j=0;j<=7;j++)
    {
        chessboard[i][j]='0';
    }
}
var re,rl,rt,rm,rc,rd,rp,rw,rcave;
var be,bl,bt,bm,bc,bd,bp,bw,bcave;
re=new Image();be=new Image();
rl=new Image();bl=new Image();
rw=new Image();bw=new Image();
rp=new Image();bp=new Image();
rm=new Image();bm=new Image();
rt=new Image();bt=new Image();
rc=new Image();bc=new Image();
rd=new Image();bd=new Image();
rcave=new Image();bcave=new Image();
re.src="images/re.png";
rl.src="images/rl.png";
rw.src="images/rw.png";
rp.src="images/rp.png";
rm.src="images/rm.png";
rt.src="images/rt.png";
rc.src="images/rc.png";
rd.src="images/rd.png";
rcave.src="images/rcave.png";
be.src="images/be.png";
bl.src="images/bl.png";
bw.src="images/bw.png";
bp.src="images/bp.png";
bm.src="images/bm.png";
bt.src="images/bt.png";
bc.src="images/bc.png";
bd.src="images/bd.png";
bcave.src="images/bcave.png";
bcave.onload=function()
{
    context.drawImage(rt,15,15,50,50);
    context.drawImage(rl,15,315,50,50);
    context.drawImage(rc,65,65,50,50);
    context.drawImage(rd,65,265,50,50);
    context.drawImage(rcave,15,165,50,50);
    context.drawImage(re,115,15,50,50);
    context.drawImage(rw,115,115,50,50);
    context.drawImage(rp,115,215,50,50);
    context.drawImage(rm,115,315,50,50);
    context.drawImage(bm,315,15,50,50);
    context.drawImage(bp,315,115,50,50);
    context.drawImage(bw,315,215,50,50);
    context.drawImage(be,315,315,50,50);
    context.drawImage(bd,365,65,50,50);
    context.drawImage(bc,365,265,50,50);
    context.drawImage(bl,415,15,50,50);
    context.drawImage(bt,415,315,50,50);
    context.drawImage(bcave,415,165,50,50);
}
var newimg=new Image();
chessboard[1][1]=chessboard[9][7]='t';
chessboard[1][7]=chessboard[9][1]='l';
chessboard[2][2]=chessboard[8][6]='c';
chessboard[2][6]=chessboard[8][2]='d';
chessboard[3][1]=chessboard[7][7]='e';
chessboard[3][3]=chessboard[7][5]='w';
chessboard[3][5]=chessboard[7][3]='p';
chessboard[3][7]=chessboard[7][1]='m';
belongboard[1][1]=belongboard[1][7]=belongboard[2][2]=belongboard[2][6]=belongboard[3][1]=belongboard[3][3]=belongboard[3][5]=belongboard[3][7]=1;
belongboard[9][7]=belongboard[9][1]=belongboard[8][6]=belongboard[8][2]=belongboard[7][7]=belongboard[7][5]=belongboard[7][3]=belongboard[7][1]=2;
var status=1,nowx=0,nowy=0,me=1;
function abs(x)
{
    if(x>0)return x;
    else return -x;
}
function ablemove(xid,yid,xpos,ypos)
{
    if(rule(chessboard[xid][yid],chessboard[xpos][ypos])==1&&((abs(ypos-yid)==1&&xpos==xid)||(abs(xpos-xid)==1&&ypos==yid))&&(belongboard[xid][yid]!=belongboard[xpos][ypos]))return 1;
    else return 0;
}
function poscheck(xid,yid)
{
    if(chessboard[xid][yid]=='0')return 0;
    else return 1;
}
var canvas=document.getElementById('chess');
var bbox=canvas.getBoundingClientRect();
chess.onclick=function(e)
{
    var x=e.clientX-bbox.left*(canvas.width/bbox.width);
    var y=e.clientY-bbox.top*(canvas.height/bbox.height);
    var xid=Math.floor((x-15)/50)+1;
    var yid=Math.floor((y-15)/50)+1;
    if(xid>9||xid<1||yid>7||yid<1)return;
    if(status==1||status=="1")
    {
        if(poscheck(xid,yid)==1&&belongboard[xid][yid]==me)
        {
            status=1-status;
            nowx=xid;nowy=yid;
        }
        else
        {
            return;
        }
    }
    else
    {
        if(ablemove(nowx,nowy,xid,yid)==1)
        {
            status=1-status;
            newimg.src="images/";
            if(me==1)newimg.src=newimg.src+"r"+chessboard[nowx][nowy]+".png";
            else if(me==2)newimg.src=newimg.src+"b"+chessboard[nowx][nowy]+".png";
            if(me==1&&xid==9&&yid==4)
            {
                alert("Red Wins!\n");
                status=-1;
            }
            else if(me==2&&xid==1&&yid==4)
            {
                alert("Blue Wins!\n");
                status=-1;
            }
            chessboard[xid][yid]=chessboard[nowx][nowy];chessboard[nowx][nowy]="0";
            belongboard[xid][yid]=belongboard[nowx][nowy];belongboard[nowx][nowy]="0";
            newimg.onload=function()
            {
                context.clearRect((xid-1)*50+20,(yid-1)*50+20,35,35);
                context.clearRect((nowx-1)*50+20,(nowy-1)*50+20,35,35);
                context.drawImage(newimg,(xid-1)*50+15,(yid-1)*50+15,50,50);
            }
        }
        else 
        {
            status=1-status;
            return;
        }
        if(me==1)me=2;
        else if(me==2)me=1;
    }
}   