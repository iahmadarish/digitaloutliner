// src/utils/locationDetector.ts
interface LocationData {
  country: string;
  // অন্যান্য প্রয়োজনীয় ফিল্ড যোগ করতে পারেন
}

export const getUserLocation = async (): Promise<string> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data: LocationData = await response.json();
    return data.country || 'US'; // ডিফল্ট হিসেবে US
  } catch (error) {
    console.error("Error detecting location:", error);
    return 'US';
  }
};