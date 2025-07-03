export function getImagePath(category) {
  switch (category) {
    case 'devops':
      return '/devops.jpeg';
    case 'herramientas':
      return '/tools.jpeg';
    case 'frontend':
      return '/frontend.jpeg';
    case 'backend':
      return '/backend.jpeg';
    default:
      return '/default.jpeg';
  }
}