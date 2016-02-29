/**
 * Created by Administrator on 2016/2/29.
 */
    //用相对路径引入模块
var nameList = require('./module');

console.log(nameList.val('renjinsong'));
console.log(nameList.val('zhengqun'));

nameList.add('zhengqun', 'deneel');
console.log(nameList.val('zhengqun'));