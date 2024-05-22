
動画見ながら要点だけメモっておくだけのもの


## ユーザ体験の指標

- Core Web Vitals
	- LCP
		- 2.5秒以内にロードを目指すことが推奨されている

			![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.21.43.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/75d22e30-986d-42e0-a94e-27daf4b41b8c/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.21.43.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013329Z&X-Amz-Expires=3600&X-Amz-Signature=a2d152e1ebbb210f624d027c240e5c528338520ec850ca6784cbd73d4951e125&X-Amz-SignedHeaders=host&x-id=GetObject)

	- FCP
		- 1.8秒以内のロードが推奨されている

			![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.22.48.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/ce4fd827-edff-4a31-8fee-2e55308fec60/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.22.48.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013332Z&X-Amz-Expires=3600&X-Amz-Signature=968c245f5f10966eb71baef36fa70b686a1a0c8dbd1314b0fb54c50cccb3f614&X-Amz-SignedHeaders=host&x-id=GetObject)

	- FID
		- 100ms以下を目指す

			![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.23.43.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/3e4c566b-0b34-4a39-8720-9012d128dbdd/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.23.43.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013333Z&X-Amz-Expires=3600&X-Amz-Signature=290cf701b8c7a2ac4eeb4124e1f201ce0e2defbf2bae6feaab6d1fa8e7f900ab&X-Amz-SignedHeaders=host&x-id=GetObject)

- 開発者体験の指標

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.31.22.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/f0ad49d8-b343-4166-abd6-6ac7067b9887/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-07_22.31.22.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013333Z&X-Amz-Expires=3600&X-Amz-Signature=060774e2752b010bf0d857c0ee33a8a7722d6c4166f206f8769f7c6c4bdcecb1&X-Amz-SignedHeaders=host&x-id=GetObject)

- ユーザー体験と開発者体験から見るフロントエンドのレンダリングパターン

## レンダリングパターン


### CSR（Client Side Rendering）


![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.19.47.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/2ad57243-c41a-4c90-8eb0-ce5c2866bab1/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.19.47.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013328Z&X-Amz-Expires=3600&X-Amz-Signature=3c196bd6271ca8c03792384ba914afd6dc33ffbb57ddc430f023bd5519a8d838&X-Amz-SignedHeaders=host&x-id=GetObject)

- `<div id=”root”></div>` のみのHTMLが最初にダウンロードされる
	- JSでページを構成する
	- デメリット
		- 最初にJSでページを構成するまで、ユーザに何もないページを提供することになる
			- サーバーコスト：低
			- クライアントコスト：高
	- JSのサイズが多くなり、ユーザのデバイスが最新ではない傾向から、パフォーマンスの最適化が求められる
		- Code SplittingやLazy Loadによるユーザ体験の向上
			- 必要最低限のJSのみ最初に読み込んでおき、優先度の低いものは遅延読み込みをさせることで、ユーザに必要最低限の機能を最初に提供しておく
				- 完成度(80%) → ユーザーが基本的に利用に支障がない → ユーザに使用してもらいつつ、裏で100%になるようにJSのDLをコントロールする
- AWSアーキテクチャの例
	- CloudFront + S3

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.30.53.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/80afdaa5-2a09-4fb7-9b5e-9d6040b494fa/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.30.53.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013335Z&X-Amz-Expires=3600&X-Amz-Signature=fa8ca1f1bae70cfd4bec483fca43f09d13fe4e8d20aac1b2c72a851d6f81c56c&X-Amz-SignedHeaders=host&x-id=GetObject)

	- キャッシュ
		- ユーザのブラウザ = Private Cache
		- CDN = Public Cache
		- オリジンのキャッシュコントロールによってコントロールできる

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.31.39.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/cae49381-5ec9-4579-99d5-a5e2699409cb/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.31.39.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013335Z&X-Amz-Expires=3600&X-Amz-Signature=fcf3dd6d1cc10e813b4865c560c72a46668a55dea9cb273011d4d1653fe466cc&X-Amz-SignedHeaders=host&x-id=GetObject)

		- webpackにより、ハッシュ値を名前に設定することでキャッシュをクリアする方法が一般的
		- 合わせてデプロイ際には、CDNのキャッシュもクリアする

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.34.28.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/cfe36d40-65f9-40b0-bd91-c714e476db99/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.34.28.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013335Z&X-Amz-Expires=3600&X-Amz-Signature=fadc28a4efe1f65833479ee17964decf33adcc6aed5ab494c3a66821cb3ac7e7&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Client Side Routingの制御

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.41.28.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/0636a317-4925-4e64-ba39-0e077a8c96eb/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.41.28.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013336Z&X-Amz-Expires=3600&X-Amz-Signature=f93f73229fc2ae51af0d7dbca0a79d885fdd2ba3e96fe22fd7733ceb24c138e2&X-Amz-SignedHeaders=host&x-id=GetObject)

	- CloudFront Functionによる制御
		- CloudFrontでは、2つのレイヤーが存在しており、よりユーザに近いEdge Locationで制御することが推奨される

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.42.09.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/66988652-990b-4bd8-b553-aaecb9dcfd4c/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.42.09.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013338Z&X-Amz-Expires=3600&X-Amz-Signature=a70084b604b39ae13d183d31adc5f55c8a7eda4eba2de9c90f228b88f327f169&X-Amz-SignedHeaders=host&x-id=GetObject)


### SSR （Server Side Rendering）

- Hydration
	- 単なる文字列としてサーバー側から返却されるHTMLにイベントなどをアタッチし、HTMLを完成させる

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.46.50.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/fe009ceb-3a80-4310-a190-9313ad0821b1/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.46.50.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013339Z&X-Amz-Expires=3600&X-Amz-Signature=fd6f4bb491d3fffd791a1133ae0369bef5f67b261ed7a72dc6acd038c6ae288c&X-Amz-SignedHeaders=host&x-id=GetObject)


		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.46.30.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/88790561-ccdc-47b1-beac-886c1c0d78d0/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.46.30.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013339Z&X-Amz-Expires=3600&X-Amz-Signature=57408808282db4df17bcd9f04b11c0bdcaff8439f32a6f01e58d170347be5cc9&X-Amz-SignedHeaders=host&x-id=GetObject)

- AWS アーキテクチャ
	- SSRするサーバーとデータソース
		- サーバー側でHTMLを構築する際にAPIを介したり、直接DBにリクエストする

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.53.50.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/0a351321-aa65-4bbf-8965-f21dbdb1017f/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.53.50.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013340Z&X-Amz-Expires=3600&X-Amz-Signature=7a2a17bcab6ff41fdf1566b64399495410be5c67c035f3c9e6b1fb908eadc36a&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Lambda Edgeを利用するパターン

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.56.01.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/4f597d78-25d8-478f-8765-82638aa3d924/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.56.01.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013340Z&X-Amz-Expires=3600&X-Amz-Signature=6c1164a6f432906096592537936fa685fe5ecbcd2dd05a85aa52da11a9a9df43&X-Amz-SignedHeaders=host&x-id=GetObject)

- SSRのレンダリングプロセス
	- FCPは短縮できる（画面の最初の描画は早い）
	- TTIは、CSRとほぼ変わらない（ユーザが利用できるようになるまでの時間は変わらない）
	- 画面は表示されているのに、ユーザが操作できないといった体験が生まれる可能性があることに注意

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.58.01.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/23b2817f-51c1-484e-a1c4-3e6850499ca7/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.58.01.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013340Z&X-Amz-Expires=3600&X-Amz-Signature=25ce2f61dab8e03fa5e5f35b4b79ee00718192fb1e7bffc667e8407ffd9d5e84&X-Amz-SignedHeaders=host&x-id=GetObject)


	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.59.19.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/b27b2cdc-bc60-44dc-8c83-216aae6a83c9/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_0.59.19.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013340Z&X-Amz-Expires=3600&X-Amz-Signature=f4ef5e74b1b1ef0acd15952d49dc3b1e6c3fe46a61cf0a6eedd08b174ac6f5ad&X-Amz-SignedHeaders=host&x-id=GetObject)

- SSRの課題

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.00.30.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/f508d3b1-1428-406a-a352-9c6352c5beea/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.00.30.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013340Z&X-Amz-Expires=3600&X-Amz-Signature=fcdec17e3cdb74ca8f745d46322caabfa84d7e6efe607a36ce597464f5f5a220&X-Amz-SignedHeaders=host&x-id=GetObject)

	- これらを解決するStreaming HTMLやSelective Hydration
	- Streaming HTML
		- データフェッチが終わったところから、HTMLを部分的に返却していく
			- FCPやTTIを早めることができる

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.01.51.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/4b020a76-dbaa-4e2b-b20d-3363caa4f814/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.01.51.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013340Z&X-Amz-Expires=3600&X-Amz-Signature=9575678445576f12154b46046db6b72bea1beff012e19900b816347556850d1c&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Selective Hydration
		- ReactのSuspenseなど

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.36.16.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/a4e946ea-1292-4138-8933-a4fd97bd59bf/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.36.16.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013341Z&X-Amz-Expires=3600&X-Amz-Signature=b6a8df8c1e62a52d69f603cfa646f12f7697517f25455bc16b6368962a952886&X-Amz-SignedHeaders=host&x-id=GetObject)


### SSG（Static Site Genetation）

- prerenderring
- SSRは、ユーザからのリクエストに応じてHTMLを生成する
- SSGは、事前にすべてのページを生成する
	- サーバーサイドでのレンダリングやフェッチが不要になり、ユーザに早く届けることができる
- AWS アーキテクチャ
	- ビルドしたHTMLをS3へ配置

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.42.37.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/95df6ff5-9980-4a68-b7a5-48977a9aa5f3/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.42.37.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013341Z&X-Amz-Expires=3600&X-Amz-Signature=224eb991a64814421392cf7449a4ca709ba0ce99d02f9b7f92065a7a9970aba9&X-Amz-SignedHeaders=host&x-id=GetObject)

- SSGの得意領域
	- 表示速度に特化

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.43.35.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/9df8272a-e1b4-4ed4-8e95-5664e132cdc8/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.43.35.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013341Z&X-Amz-Expires=3600&X-Amz-Signature=b4f41bd58b125ef334fb861408e5938a185b741886dcdb762526b6e01357b06c&X-Amz-SignedHeaders=host&x-id=GetObject)

	- 注意点

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.44.36.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/41438ace-e9bb-4591-bac1-0e33d3444116/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.44.36.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013341Z&X-Amz-Expires=3600&X-Amz-Signature=70d7a6d1f26fe5802f303ab250572c54a7e325ef217d1ec2fa76297a8e99e4d5&X-Amz-SignedHeaders=host&x-id=GetObject)


### ISR（Incremental Static Regeneration）

- ページに優先度をつけて、必要な分だけ生成することでSSGのビルドにかかる時間という課題を解決する

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.49.58.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/0ccb84f1-ffb3-4842-9da3-3795d5e52662/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.49.58.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013342Z&X-Amz-Expires=3600&X-Amz-Signature=2c9d0d2963ef52e4e39d1b1eb985dcd5fe01726a5a05c1c4869c847e3c54f025&X-Amz-SignedHeaders=host&x-id=GetObject)

- Cache
	- 60秒ごとのrevalidate
	- オンデマンド revaidationも選択肢にある

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.51.41.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/9813b124-73b0-4e5d-ab7c-e6623c86113d/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.51.41.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013342Z&X-Amz-Expires=3600&X-Amz-Signature=fab6f8309cf53ba4a26d9edfbefded82f0242d447a81e239f7bb7e4537245f5f&X-Amz-SignedHeaders=host&x-id=GetObject)


## Next.jsのホスティングパターン


![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.53.44.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/0703b173-ca6d-4d47-910c-a6c3e10955d0/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.53.44.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013328Z&X-Amz-Expires=3600&X-Amz-Signature=94c912f032a0fb152b3761d8364e979b3f46bbcc8cf9c0579dfeab7c0d2b4039&X-Amz-SignedHeaders=host&x-id=GetObject)

- Serverless
	- Next12までの一部の機能をサポートしていることやLambda@Edgeを利用している点への注意

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.54.33.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/53616558-6fde-458d-81a5-be31feb648a1/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.54.33.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013342Z&X-Amz-Expires=3600&X-Amz-Signature=df67a776c2c37f5a223dee58b4a583a81d89f85c5e1d8301ec0ac2d2b17071bd&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Serverless Next.jsの開発は停止している

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.56.18.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/a7bb99ef-973a-4e9d-9b69-259b6beb1e93/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.56.18.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013342Z&X-Amz-Expires=3600&X-Amz-Signature=ecb8e4fbeba644ed5547f3077ea24e4c27f2022f7954daa0f4e9fa400b959d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Open Nextという方法

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.58.00.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/70c12591-f21b-4713-ae9c-50b4ae39225a/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.58.00.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013342Z&X-Amz-Expires=3600&X-Amz-Signature=b141b0df21bb5b9033c1012bed6780a718e9195327814858ee4627337c4c8b38&X-Amz-SignedHeaders=host&x-id=GetObject)

	- Lambda アダプター

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.59.17.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/1f53d93c-eeee-4183-85be-10373643a899/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.59.17.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013343Z&X-Amz-Expires=3600&X-Amz-Signature=8ff7d8eb75c50e54293fe683e7f827ca9e953ff2567d824c2124205e42bc743d&X-Amz-SignedHeaders=host&x-id=GetObject)


		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.59.31.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/d23fce06-e5d6-47cf-9e43-5d7e87bb8516/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_1.59.31.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013343Z&X-Amz-Expires=3600&X-Amz-Signature=04756c5b48682703daa70b3899fe6c965667e7d144214a741d0a95e55196f8f8&X-Amz-SignedHeaders=host&x-id=GetObject)

		- 

		![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.02.07.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/ec42f0e2-e0ca-4956-a993-3af9efce370b/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.02.07.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013343Z&X-Amz-Expires=3600&X-Amz-Signature=15e4316c16daff7a21ac6bc103d19c7108873eda5831490f555354f4c740a06c&X-Amz-SignedHeaders=host&x-id=GetObject)

- Amplify Hosting
	- シンプルに利用できるが、すべての機能をサポートしていない

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.05.04.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/3d112b7c-5549-4a2b-af49-82831e84a66a/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.05.04.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013343Z&X-Amz-Expires=3600&X-Amz-Signature=0152780373897e67addf9c42f5a7ec8e4d4350138097f2fa1e69e3167d0c45a9&X-Amz-SignedHeaders=host&x-id=GetObject)

- Computing
	- 開発コストは上がるが、すべての機能を利用できる

	![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.05.49.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/f48d6e33-61cf-4591-b8a5-70fca82fa829/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.05.49.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013343Z&X-Amz-Expires=3600&X-Amz-Signature=d66595fba730eca696a18286ce29c02d8ef64199e0f415584448ab2b257c11ae&X-Amz-SignedHeaders=host&x-id=GetObject)


まとめ


![%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.06.27.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/521bfabc-4589-4023-af1d-c7e9f5922659/d21cb858-e015-4bf5-aeab-50c45370da09/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-05-12_2.06.27.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240522T013328Z&X-Amz-Expires=3600&X-Amz-Signature=b6db1bc85f0c41a69588b468bfcdacffda4e233842f0f744f92014945f2ef885&X-Amz-SignedHeaders=host&x-id=GetObject)


おまけ


[video](https://www.youtube.com/watch?v=R2YQG5gQMXo)


メモ

- SSR
	- SSRはお客様でトラブルが発生した際に問題の切り分けがしやすい
		- CSRはお客様の環境でwebページを構築してしまうので、お客様環境固有の問題なのか、サービス側が送信したものに不具合があったか分かりにくい
		- SSRの場合は、提供しているものをサーバー側で作っているのでバックアップをとって実際にお客様に渡しているものを把握できる
	- JSが動かない環境でも目的を果たせる（かもしれない）
		- CSRはJSが動かないとほとんど何もできない
		- SSRはサーバー側でHTMLを構築するのでJSが機能しないお客様のフォローもできる
