/**
 * Created by 亮杰 on 2017/6/1.
 */
import messageModel from  '../viewmodels/MessageModel';

messageModel.message="hello world!"

new Vue({
    el: '#app',//Vue实例挂载到id为app标签上
    data: {
        message: messageModel.message
    }//数据来源于model对象
});
