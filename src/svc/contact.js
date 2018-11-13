import { success, failure } from './libs/response';

export default async function main(event) {
  const data = JSON.parse(event.body);

  try {
    return success({ status: true, data });
  } catch (e) {
    console.log(e);
    return failure({ status: false });
  }
}
