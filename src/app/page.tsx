import { SettingsTabs } from "@/components/SettingsTabs"
import * as Input from '@/components/Input'
import { LuBold, LuItalic, LuLink, LuList, LuListOrdered, LuMail } from "react-icons/lu"
import * as FileInput from '@/components/Form/FileInput'
import { Select } from "../components/Form/Select"
import { SelectItem } from "@/components/Form/Select/SelectItem"
import { Textarea } from "@/components/Form/Textarea"
import { Button } from "@/components/Button"


export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center justify-between items-center pb-6 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">Update your photo and personal details here.</span>
          </div>
          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">Cancel</Button>
            <Button type="submit" form="settings" variant="primary">Save</Button>
          </div>
        </div>
        <form className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200" id="settings">
          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">Name</label>
            <div className="flex flex-col lg:grid gap-6 lg:grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Patrícia" />
              </Input.Root>

              <div className="flex flex-col gap-3 lg:block">
                <label htmlFor="lastName" className="text-sm font-medium text-zinc-700 lg:sr-only">Last name</label>
                <Input.Root>
                  <Input.Control id="lastName" defaultValue="da Silva Lima" />
                </Input.Root>
              </div>

            </div>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-6">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email adress</label>
            <Input.Root>
              <Input.Prefix>
                <LuMail className="h-5 w-5 text-zinc-500 mr-2" />
              </Input.Prefix>
              <Input.Control type="email" id="email" defaultValue="patriciasilvalimah@gmail.com" />
            </Input.Root>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-6">
            <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
              Your photo
              <span className="mt-0.5 text-sm font-normal text-zinc-500 block">This will be displayed on your profile.</span>
            </label>

            <FileInput.Root className="flex flex-col lg:flex-row lg:items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>

          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-6">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">Role</label>
            <Input.Root>
              <Input.Control type="role" id="role" defaultValue="Front-End Developer" />
            </Input.Root>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-6">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700">Country</label>
            <Select placeholder="Select a country">
              <SelectItem value="BR" text="Brazil" />
              <SelectItem value="USA" text="United States" />
            </Select>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-6">
            <label htmlFor="timezone" className="text-sm font-medium text-zinc-700">Timezone</label>
            <Select placeholder="Select a timezone">
              <SelectItem value="utc8" text="Pacific Standard Time (UTC-08:00)" />
              <SelectItem value="utc3" text="America São Paulo(UTC-03:00)" />
            </Select>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-6">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 text-sm font-normal text-zinc-500 block">Write a short introduction.</span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col lg:grid gap-3 lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" defaultChecked text="Normal Text" />
                  <SelectItem value="md" text="Markdown" />
                </Select>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" type="button">
                    <LuBold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <LuItalic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <LuLink className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <LuList className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <LuListOrdered className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                </div>
              </div>
              <Textarea id="bio" defaultValue="I'm a ReactJS Frontend Developer" />
            </div>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-6">
            <label htmlFor="projects" className="text-sm font-medium text-zinc-700">
              Portfolio projects
              <span className="mt-0.5 text-sm font-normal text-zinc-500 block">Share a few snippets of your work.</span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-6">
            <Button type="button" variant="outline">Cancel</Button>
            <Button type="submit" form="settings" variant="primary">Save</Button>
          </div>
        </form>
      </div>
    </>
  )
}
