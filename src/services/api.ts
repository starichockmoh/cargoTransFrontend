import { getClient } from 'services/axiosInstance';
import { ICargo, PageTypeEnum } from 'shared/types/tables.type';
import type { AnyObject } from 'antd/lib/_util/type';

export const Api = {
  async getMany(
    pageType: PageTypeEnum,
    isSuperUser: boolean,
    currentUser: number | null,
    search?: string,
  ) {
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (!isSuperUser && currentUser)
      params.append('client_id', String(currentUser));

    const response = await getClient().get(`${pageType}?` + params);
    let filterData = response.data;
    if (pageType === 'cargoes' && !isSuperUser) {
      filterData = response.data.filter(
        (cargo: ICargo) => cargo.client_id === currentUser,
      );
    }
    return filterData;
  },

  async getOne(pageType: PageTypeEnum, id: number) {
    const response = await getClient().get(`${pageType}/${id}`);
    const dataForShow: AnyObject = {};
    Object.entries(response.data).forEach(([key, value]) => {
      if (typeof value === 'object') {
        Object.entries(value!).forEach(([keyOb, valueOb]) => {
          dataForShow[`${key} ${keyOb}`] = valueOb;
        });
      } else {
        dataForShow[key] = value;
      }
    });
    return dataForShow;
  },

  async delete(pageType: PageTypeEnum, id: number) {
    return await getClient().delete(`${pageType}/${id}`);
  },

  async create(pageType: PageTypeEnum, data: AnyObject) {
    const payloadData = {} as any;
    Object.entries(data).forEach(([key, value]) => {
      if (key.startsWith('date')) {
        payloadData[key] = (value as Date).toISOString();
      } else if (typeof value === 'object') {
        payloadData[key] = value.value;
      } else {
        payloadData[key] = value;
      }
    });
    return await getClient().post(`${pageType}`, payloadData);
  },

  async update(pageType: PageTypeEnum, data: AnyObject, id: number) {
    const payloadData = { id } as any;
    Object.entries(data).forEach(([key, value]) => {
      if (key.startsWith('date')) {
        payloadData[key] = (value as Date).toISOString();
      } else if (typeof value === 'object') {
        payloadData[key] = value.value;
      } else {
        payloadData[key] = value;
      }
    });
    return await getClient().put(`${pageType}/${id}`, payloadData);
  },

  async getCost(costDate: string) {
    return await getClient().get(`requests/cost?date=${costDate}`);
  },

  async auth() {
    const response = await getClient().get('clients');
    if (response.data.length) {
      return response.data[0].id;
    }
    return null;
  },
};
