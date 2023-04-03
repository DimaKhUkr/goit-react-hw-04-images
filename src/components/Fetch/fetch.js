import { toast } from 'react-toastify';

const API_KEY = '33377492-476d22b77d4b85ba3622e340f';

export async function fetchImg(imgRequestName, page) {
  const searchParams = new URLSearchParams({
    per_page: 12,
    page: page,
    key: API_KEY,
    q: imgRequestName,
  });
  try {
    const response = await fetch(`https://pixabay.com/api/?${searchParams}`);
    if (!response.ok) {
      throw new Error('Какая то беда 404');
    }

    const imgs = await response.json();
    if (!imgs.total > 0) {
      throw new Error('По вашему запросу ничего не найдено');
    }
    const filtered = imgs.hits.map(imgSet => {
      return {
        id: imgSet.id,
        webformatURL: imgSet.webformatURL,
        largeImageURL: imgSet.largeImageURL,
      };
    });
    return filtered;
  } catch (error) {
    toast.error(error.message, {
      autoClose: 3000,
      hideProgressBar: true,
    });
  }
}
