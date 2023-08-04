import { getSessionStorageItem, setSessionStorageItem } from '../storageUtil';

beforeAll(() => {
  const storage: Record<string, any> = {
    wrongKey: ' ',
    goodKey: 1,
  };

  Storage.prototype.getItem = jest.fn((key: string) => storage[key]);
  Storage.prototype.setItem = jest.fn((key: string, value: string) => {
    storage[key] = value;
  });
});

describe('getSessionStorageItem', () => {
  context('특정 key를 가지고 있으면', () => {
    it('잘못된 JSON 값을 가지고 있으면 null을 반환한다.', () => {
      jest.spyOn(console, 'error').mockImplementation(() => null);

      expect(getSessionStorageItem('wrongKey')).toBe(' ');
    });

    it('값을 반환한다.', () => {
      expect(getSessionStorageItem('goodKey')).toBe(1);
    });
  });

  context('특정 key를 가지고 있지 않으면', () => {
    it('null을 반환한다.', () => {
      expect(getSessionStorageItem('newKey1')).toBeNull();
      expect(getSessionStorageItem('newKey2')).toBeNull();

      // edge 케이스
      expect(getSessionStorageItem('')).toBeNull();
      expect(getSessionStorageItem(undefined as any)).toBeNull();
      expect(getSessionStorageItem(null as any)).toBeNull();
    });
  });
});

describe('setSessionStorageItem', () => {
  context('비정상적인 key, value를 전달했을 경우', () => {
    it('에러를 throw한다.', () => {
      expect(() => setSessionStorageItem('', '1')).toThrow();
      expect(() => setSessionStorageItem(undefined as any, '1')).toThrow();
      expect(() => setSessionStorageItem(null as any, '1')).toThrow();

      expect(() => setSessionStorageItem('1', '')).toThrow();
      expect(() => setSessionStorageItem('1', undefined as any)).toThrow();
      expect(() => setSessionStorageItem('1', null as any)).toThrow();
    });
  });

  context('정상적인 key, value를 전달했을 경우', () => {
    it('key에 대한 value값을 세션스토리지에 저장한다.', () => {
      setSessionStorageItem('key', 'key');

      expect(getSessionStorageItem('key')).toBe('key');
    });
  });
});
