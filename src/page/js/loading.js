export default function loading(vm) {
  const load = vm.$loading({
    target:'.class_honor_list',
    text: '努力加载中，请稍候！！！',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.5)',
    customClass:'fs20'
  });
  return load;
}
