这是一个tab切换组件：
    例子：
        <tabs :currentIndex="currentIndex" @changeKey="callback">
            <tab tabName="tab1" index="1">
                <div>内容1</div>
            </tab>
            <tab tabName="tab2" index="2">
                <div>内容2</div>
            </tab>
            <tab tabName="tab3" index="3">
                <div>内容3</div>
            </tab>
        </tabs>
        
        <script>
            data(){
                return{
                    currentIndex:"1"
                }
            },
            methods:{
                callback(index){
                   this.currentIndex = index
                }
            }
        </script>

    参数意义：
        currentIndex: 当前选中高亮tab              string/number
        tabName:      tab的标题文本                string
        index:        tab的唯一索引(与高亮匹配)     string/number
        changeKey     改变currentIndex的值         function