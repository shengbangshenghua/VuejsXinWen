var vm = new Vue({
    el: "#app",
    data: {
        index: 0,
        title: '',
        content: '',
        sort: '',
        name: '',
        state: true,
        news: [
            {
                "title": "新闻标题1",
                "content": "新闻的内容1",
                "sort": "科技",
                "name": "人民网",
                "time": 1539311595000,
                "update": 1539311595000,
                "state": true
            },
            {
                "title": "新闻标题2",
                "content": "新闻的内容2",
                "sort": "国内",
                "name": "人民网",
                "time": 1539311595000,
                "update": 1539311595000,
                "state": true
            },
            {
                "title": "新闻标题3",
                "content": "新闻的内容3",
                "sort": "科技",
                "name": "人民网",
                "time": 1539311595000,
                "update": 1539311595000,
                "state": true
            },
            {
                "title": "新闻标题4",
                "content": "新闻的内容4",
                "sort": "军事",
                "name": "人民网",
                "time": 1539311595000,
                "update": 1539311595000,
                "state": true
            },
            {
                "title": "新闻标题5",
                "content": "新闻的内容5",
                "sort": "科技",
                "name": "人民网",
                "time": 1539311595000,
                "update": 1539311595000,
                "state": true
            }
        ]
    },
    computed: {
        getTime: function () {
            var shijianchuo = Date.parse(new Date());
            return shijianchuo;
        }
    },
    methods: {
        add: function () {
            //追加数据到数组
            this.news.unshift({
                "title": this.title,
                "content": this.content,
                "sort": this.sort,
                "name": this.name,
                "time": this.getTime,
                "update": this.getTime,
                "state": this.state
            })

            //把当前数组存到本地存储
            localStorage.setItem('news', JSON.stringify(this.news));

            //关闭添加框
            $('#tianjiaxinwen').modal('hide');


            //清空数据
            this.title = '';
            this.content = '';
            this.sort = '';
            this.name = '';
        },
        //编辑按钮
        edit: function (index) {
            console.log(index);
            this.index = index;
            this.title = this.news[index].title;
            this.name = this.news[index].name;
            this.content = this.news[index].content;
            this.sort = this.news[index].sort;
            this.state = this.news[index].state;
        },
        //确认编辑按钮
        save: function () {
            //修改数据
            this.news[this.index].title = this.title;
            this.news[this.index].content = this.content;
            this.news[this.index].name = this.name;
            this.news[this.index].sort = this.sort;
            this.news[this.index].update = this.getTime;
            this.news[this.index].state = this.state;


            //把当前数组存到本地存储
            localStorage.setItem('news', JSON.stringify(this.news));

            //关闭添加框
            $('#bianjixinwen').modal('hide');


            //清空数据
            this.title = '';
            this.content = '';
            this.sort = '';
            this.name = '';

        },
        del: function (index) {

            if (confirm("确认删除吗？")) {
                this.news.splice(index, 1);

                //把当前数组存到本地存储
                localStorage.setItem('news', JSON.stringify(this.news));

            }

        },
        //修改发布状态
        sss:function(index){
            this.news[index].state = !this.news[index].state;

            //把当前数组存到本地存储
            localStorage.setItem('news', JSON.stringify(this.news));

        }
    },
    created: function () {
        if (localStorage.getItem('news') !== null) {
            //把本地存储的值赋给vue的新闻数组
            this.news = JSON.parse(localStorage.getItem('news'));
        }
    }
})