/**
 * Created by Administrator on 2016/2/29.
 */
    //由于nodejs中，require来引入模块时会有缓存作用
//    也就是说，模块中的代码只会执行一次
//    这个特性对于性能上来说是个很大的优化，但是也可能有一些不太方便的地方
//    比如说，当一个模块依赖于某个配置时，就不能把配置在模块中保存下来
var nickNameList = {
    'renjinsong': 'yuji'
};

//module是模块的意思， module.exports就是模块要导出的值咯
//module中还有一些其他的东西, 比如说filename, paths, id（其实差不多id就是全路径名）等

module.exports = {
    val: function(name){
        if(nickNameList.hasOwnProperty(name)){
            return nickNameList[name];
        }
        return 'Not found what you\'re looking for!';
    },
    add: function(name, nickName){
        nickNameList[name] = nickName;
    }
}


//exports是module.exports的简写
//但是由于nodejs的引用特性，不能直接使用 exports = xxxx 导出模块
//而且使用了module.exports之后就不能用这货了
//exports.add = function(name, nickName){
//    nickNameList[name] = nickName;
//}