import Link from "next/link"
import Image from "next/image"
export default async function NavBar() {
  return (
    <>
      <header>
        <nav className="relative">
          <>
            <div className="float-left">
              <Link href="/" className="flex relative text-[#0A66c2] font-semibold text-2xl md:text-3xl">Linked
                <span className="translate-y-2">
                  <Image src="/icon.ico" alt="linkedin icon" width={50} height={50} style={{ width: '20px', height: '20px' }}></Image>
                </span>
              </Link>
            </div>
            <div className="float-right space-x-[30px]">
              <Link href="/signup" className="text-[#000000BF] font-md hover:bg-slate-50 py-4 px-4 hover:rounded-full">Join now</Link>
              <Link href="/signin" style={{ display: 'inline-flex', justifyContent: 'center', borderRadius: '25px', padding: '12px 24px' }} className="border-[1px] border-[#0A66c2] text-[#0A66c2] hover:transiton hover:bg-blue-50">Signin</Link>
            </div>
          </>
        </nav>
      </header>
    </>
  )
}