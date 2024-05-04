import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import ManagerList from "@/components/dashboard/manager/manager-list";
import { getAllManagersByPage } from "@/services/manager-service";


const ManagerPage = async ({ searchParams }) => {
  const { page } = searchParams;

  const res = await getAllManagersByPage(page);
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);

  return (
    <>
      <PageHeader>Manager</PageHeader>
      <Spacer height={70} />
      <ManagerList data={data} />
      <Spacer />
    </>
  );
};

export default ManagerPage;

//partname deki queryler LMk için
//  const {page} = searchParams; kullanıyoruz
//oradan bize ilgili sayfa bilgisi gelecek
