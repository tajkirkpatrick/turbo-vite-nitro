import { useForm, type FieldApi } from "@tanstack/react-form";
import { valibotValidator } from "@tanstack/valibot-form-adapter";
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/EKtigfEiXUx
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RegisterSchema } from "@/lib/schemas";
import { useRegister } from "@/lib/utils";
import { email, minLength, string } from "valibot";

function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <em className="text-xs text-red-600 text-opacity-70">
          {field.state.meta.touchedErrors}
        </em>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}

export function RegisterForm() {
  const { trigger } = useRegister();

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async ({ value, formApi }) => {
      // trigger notification on catch
      trigger({ ...value }).catch((e) => {
        console.error(e);
      });

      formApi.reset();
      window.location.href = "/login";
    },
    validatorAdapter: valibotValidator,
    validators: {
      onSubmit: RegisterSchema,
    },
  });

  return (
    <form.Provider>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
      >
        <div className="mb-4">
          <form.Field
            name="username"
            validatorAdapter={valibotValidator}
            validators={{ onChange: string([minLength(1)]) }}
            children={(field) => (
              <>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor={field.name}
                >
                  Username
                </label>
                <Input
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  id={field.name}
                  placeholder={
                    field.name.charAt(0).toUpperCase() + field.name.slice(1)
                  }
                  type="text"
                />
                <FieldInfo field={field} />
              </>
            )}
          />
        </div>
        <div className="mb-4">
          <form.Field
            name="email"
            validatorAdapter={valibotValidator}
            validators={{ onChange: string([email(), minLength(1)]) }}
            children={(field) => (
              <>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor={field.name}
                >
                  Email
                </label>
                <Input
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  id={field.name}
                  placeholder={
                    field.name.charAt(0).toUpperCase() + field.name.slice(1)
                  }
                  type="email"
                />
                <FieldInfo field={field} />
              </>
            )}
          />
        </div>
        <div className="mb-6">
          <form.Field
            name="password"
            validatorAdapter={valibotValidator}
            validators={{ onChange: string([minLength(8)]) }}
            children={(field) => (
              <>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor={field.name}
                >
                  Password
                </label>
                <Input
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  id={field.name}
                  placeholder={
                    field.name.charAt(0).toUpperCase() + field.name.slice(1)
                  }
                  type="password"
                />
                <FieldInfo field={field} />
              </>
            )}
          />
        </div>
        <div className="mb-4">
          <form.Subscribe
            selector={({ isSubmitting, canSubmit }) => [
              isSubmitting,
              canSubmit,
            ]}
            children={([isSubmitting, canSubmit]) => (
              <Button
                onClick={(e) => {
                  if (isSubmitting || !canSubmit) {
                    e.stopPropagation();
                    e.preventDefault();
                  }
                }}
                type="submit"
                aria-disabled={isSubmitting || !canSubmit}
                className="w-full bg-blue-600 text-white hover:bg-blue-700 aria-disabled:cursor-not-allowed aria-disabled:bg-gray-300"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            )}
          />
        </div>
      </form>
    </form.Provider>
  );
}
