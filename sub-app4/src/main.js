import $ from 'jquery';

function render(props) {
  const { container } = props;
  const app = $(`
    <div>
      <h2>Hello from jQuery App!</h2>
      <p>This is a simple jQuery micro-app.</p>
    </div>
  `);
  $(container ? container.querySelector('#app') : '#app').html(app);
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[jquery] bootstrap');
}

export async function mount(props) {
  console.log('[jquery] mount', props);
  render(props);
}

export async function unmount(props) {
  console.log('[jquery] unmount');
  const { container } = props;
  $(container ? container.querySelector('#app') : '#app').empty();
}
