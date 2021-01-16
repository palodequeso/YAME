import '../components/editor-application';
import '../../templates/index.scss';

document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementsByTagName('body')[0];
    const app = document.createElement('editor-application');
    body.appendChild(app);
});
