<script>
export default {
  name: "Content",
  props: ["panes"],
  render() {
    return (
      <div>
        {this.panes.map((element, index) => {
          return <div>{element.active ? element.$slots.default : ""}</div>;
        })}
      </div>
    );
  }
};
</script>
<style scoped>
</style>
