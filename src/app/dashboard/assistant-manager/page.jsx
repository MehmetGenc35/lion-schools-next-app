import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import AssistantManagerList from "@/components/dashboard/assistant-manager/assistant-manager-list";
import { getAllAssistantManagersByPage } from "@/services/assistant-manager-service";


const AssistantManagerPage = async ({ searchParams }) => {
  const { page } = searchParams;

  const res = await getAllAssistantManagersByPage(page);
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);

  return (
    <>
      <PageHeader>Assistant Manager</PageHeader>
      <Spacer height={70} />
      <AssistantManagerList data={data} />
      <Spacer />
    </>
  );
};

export default AssistantManagerPage;

//partname deki queryler LMk için
//  const {page} = searchParams; kullanıyoruz
//oradan bize ilgili sayfa bilgisi gelecek
