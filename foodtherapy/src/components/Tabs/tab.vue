<script>
export default {
  name: "Tab",
  props: {
    tabName: {
      type: String,
      default: "tab"
    },
    index: {
      type: [String, Number],
      default: 0
    }
  },
  mounted() {
    this.$parent.panes.push(this);
  },
  computed: {
    // this.$parent.currentIndex
    // 对比高亮
    active() {
      return this.$parent.currentIndex == this.index;
    }
  },
  methods: {
    getIndexHandler(event) {
      // console.log(event.target.innerHTML);
      this.$parent.onChangeIndex(this.index);
    }
  },

  render() {
    let className = {
      tab: true,
      active: this.active
    };

    return (
      <li onClick={this.getIndexHandler.bind(this)} class={className}>
        {this.tabName}
      </li>
    );
  }
};
</script>
<style scoped>
.tab {
  list-style: none;
  line-height: 40px;
  
 
  flex: 1;
  text-align: center;
}

.tab.active {
   color: #3DB48A
}
</style>
