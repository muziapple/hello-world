function WeiWeiNumber(i){
    var primitiveValue = 0;
    
    if(typeof i === "number"){
            primitiveValue = i;
    }else{
        var regR = /^([\+\-]?)([0-9]+)$/.exec(i);//正则表达式抓取正负符号和数字的文本值
        if(regR !== null){
            var nstr = regR[2];//数字的文本值，相当于Java的group(2)
            var nstrlen = nstr.length;
            var nResult = arguments.callee(0);//callee就是本function
            for(idx in nstr){
                //通过计算ASCII码的差值转换成数字
                nResult += (nstr[idx].charCodeAt(0) - "0".charCodeAt(0)) * Math.pow(10, nstrlen - idx -1);
            }
            if(regR[1] === "-"){//判断正负值
                primitiveValue = -nResult;
            }else{
                primitiveValue = nResult;
            }
        }else{
            primitiveValue = NaN;
        }
    }
    
    if(this instanceof WeiWeiNumber){
        //construct object
        this.valueOf = function(){
            return primitiveValue;
        }
        
        this.toString = function(){
            return primitiveValue + '';
        }
        return this;
    }else{
        //invoke as function
        return primitiveValue;
    }
}
