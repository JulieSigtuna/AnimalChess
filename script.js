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
    if(xid==1&&yid==8)
    {
        return 1;
    }
    else if(xid==8&&yid==1)
    {
        return -1;
    }
    else if(xid>=yid)
    {
        return 1;
    }
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
var imgload=0,imgfailed=0;
function drawchess()
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
function imgloaded()
{
    imgload++;
    if(imgload==18&&imgfailed==0)drawchess();
}
function imgerror()
{
    if(imgfailed==0)
    {
        imgfailed=1;
        alert("Image Load Failed!\n"+this.src);
    }
}
re.onload=imgloaded;be.onload=imgloaded;
rl.onload=imgloaded;bl.onload=imgloaded;
rw.onload=imgloaded;bw.onload=imgloaded;
rp.onload=imgloaded;bp.onload=imgloaded;
rm.onload=imgloaded;bm.onload=imgloaded;
rt.onload=imgloaded;bt.onload=imgloaded;
rc.onload=imgloaded;bc.onload=imgloaded;
rd.onload=imgloaded;bd.onload=imgloaded;
rcave.onload=imgloaded;bcave.onload=imgloaded;
re.onerror=imgerror;be.onerror=imgerror;
rl.onerror=imgerror;bl.onerror=imgerror;
rw.onerror=imgerror;bw.onerror=imgerror;
rp.onerror=imgerror;bp.onerror=imgerror;
rm.onerror=imgerror;bm.onerror=imgerror;
rt.onerror=imgerror;bt.onerror=imgerror;
rc.onerror=imgerror;bc.onerror=imgerror;
rd.onerror=imgerror;bd.onerror=imgerror;
rcave.onerror=imgerror;bcave.onerror=imgerror;
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
function getimg(x,belong)
{
    if(belong==1)
    {
        if(x=='e')return re;
        else if(x=='l')return rl;
        else if(x=='w')return rw;
        else if(x=='p')return rp;
        else if(x=='m')return rm;
        else if(x=='t')return rt;
        else if(x=='c')return rc;
        else if(x=='d')return rd;
    }
    else if(belong==2)
    {
        if(x=='e')return be;
        else if(x=='l')return bl;
        else if(x=='w')return bw;
        else if(x=='p')return bp;
        else if(x=='m')return bm;
        else if(x=='t')return bt;
        else if(x=='c')return bc;
        else if(x=='d')return bd;
    }
}
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
function restart()
{
    location.reload();
}
function abs(x)
{
    if(x>0)return x;
    else return -x;
}
function ablemove(xid,yid,xpos,ypos)
{
    if(belongboard[xid][yid]==1&&xpos==1&&ypos==4)return 0;
    else if(belongboard[xid][yid]==2&&xpos==9&&ypos==4)return 0;
    else if(rule(chessboard[xid][yid],chessboard[xpos][ypos])==1&&((abs(ypos-yid)==1&&xpos==xid)||(abs(xpos-xid)==1&&ypos==yid))&&(belongboard[xid][yid]!=belongboard[xpos][ypos]))return 1;
    else return 0;
}
function poscheck(xid,yid)
{
    if(chessboard[xid][yid]=='0')return 0;
    else return 1;
}
var canvas=document.getElementById('chess');
chess.onclick=function(e)
{
    if(status==-1)return;
    if(imgfailed==1)return;
    if(imgload<18)return;
    var bbox=canvas.getBoundingClientRect();
    var x=(e.clientX-bbox.left)*(canvas.width/bbox.width);
    var y=(e.clientY-bbox.top)*(canvas.height/bbox.height);
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
            var newimg=getimg(chessboard[nowx][nowy],me);
            chessboard[xid][yid]=chessboard[nowx][nowy];chessboard[nowx][nowy]="0";
            belongboard[xid][yid]=belongboard[nowx][nowy];belongboard[nowx][nowy]="0";
            context.clearRect((xid-1)*50+20,(yid-1)*50+20,35,35);
            context.clearRect((nowx-1)*50+20,(nowy-1)*50+20,35,35);
            context.drawImage(newimg,(xid-1)*50+15,(yid-1)*50+15,50,50);
            if(me==1&&xid==9&&yid==4)
            {
                status=-1;
                setTimeout(function(){alert("Red Wins!\n");},0);
            }
            else if(me==2&&xid==1&&yid==4)
            {
                status=-1;
                setTimeout(function(){alert("Blue Wins!\n");},0);
            }
        }
        else 
        {
            status=1-status;
            return;
        }
        if(status!=-1)
        {
            if(me==1)me=2;
            else if(me==2)me=1;
        }
    }
}
