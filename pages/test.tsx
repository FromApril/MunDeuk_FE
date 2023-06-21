export default function TestPage() {
  return (
    <div>
      <div>{process.env.NEXT_PUBLIC_KAKAO_API_KEY}</div>
      <div>{process.env.NEXT_PUBLIC_BASE_URL}</div>
      <div>{process.env.NEXT_PUBLIC_NCLOUD_CLIENT_ID}</div>
      <div>{process.env.NEXT_PUBLIC_NCLOUD_CLIENT_SECRET}</div>
      <div>{process.env.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED}</div>
      <div></div>
      <div></div>
    </div>
  );
}
