<script>

import Content from "./content"

export default {
  name: "Tabs",
  data(){
      return{
          panes:[]
      }
  },
  props: {
    currentIndex: {
      type: [String, Number],
      default: 1
    }
  },
  methods:{
    onChangeIndex(index){
        this.$emit("changeKey",index);
    }
  },
  components:{
      Content
  },
  render() {
    return (
      <div class="tabs">
        <ul class="tabs-header">
          {/* render中插槽的使用方式 */}
          {this.$slots.default}
        </ul>
        <Content panes={ this.panes }/>
      </div>
    );
  }
};
</script>
<style scoped>
.tabs-header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #ededed;
}
</style>
