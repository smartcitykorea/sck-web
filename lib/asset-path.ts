/**
 * next/image 의 src 에는 basePath 가 자동으로 붙지 않는다.
 * (Next.js 공식 문서 basePath > Images: "you will need to add the basePath in front of src")
 *
 * 이미지 경로의 원본은 content.json 한 곳에만 두고(SSOT),
 * 배포 위치에 따른 접두사는 렌더링 시점에 이 함수로만 붙인다(DRY).
 *
 * 배포 위치별 빌드:
 *   서버 PC / 커스텀 도메인 (루트 경로)  ->  npm run build
 *   GitHub Pages (하위 경로)            ->  NEXT_PUBLIC_BASE_PATH=/sck-web npm run build
 */
export const ASSET_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(src: string): string {
  return src.startsWith("/") ? `${ASSET_BASE_PATH}${src}` : src;
}
